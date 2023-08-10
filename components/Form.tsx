import React, { useState, ChangeEvent, FormEvent } from 'react';
import FieldRenderer from './FieldRenderer';
import type { SchemaType } from '../schema/page';
import SubmitButton from './SubmitButton';

interface FormProps {
  schema: SchemaType;
}

const Form: React.FC<FormProps> = ({ schema }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const fieldValue =
      type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const shouldShowField = (fieldName: string) => {
    const field = schema.properties[fieldName];
    if (field.conditions) {
      return field.conditions.every((condition) => {
        const { field: sourceField, operator, value } = condition;
        if (formData[sourceField]) {
          // in this case: description
          switch (operator) {
            case 'length': // property condition for description
              return formData[sourceField].length > value; // length of current field, needs to be more than the value set in the properties
            default:
              return false;
          }
        } // No source field, then show the field.
        return false;
      });
    } // No conditions, show the field
    return true;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    let fieldWithError = null;
    const hasErrors = schema.required.some((fieldName) => {
      if (formData) {
        const fieldValue = formData[fieldName];
        if (!fieldValue || fieldValue.trim() === '') {
          fieldWithError = fieldName;
          return true;
        }
        return false;
      } else setIsSubmitting(false);
    });

    if (hasErrors) {
      setIsSubmitting(false);
      setFormErrors(fieldWithError); // stop execution when you have an error in a field
      return;
    }

    setFormErrors(null);

    try {
      if (formData.truncateDescription) {
        formData.description = formData.description.slice(0, 10) + '...';
      }
      await fetch('/api/submitForm', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    } catch (e) {
      console.error('Error submitting form data:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // TODO-1: Form should submit this information
    <form className="space-y-8" onSubmit={handleSubmit}>
      {Object.keys(schema.properties).map(
        (fieldName) =>
          shouldShowField(fieldName) && (
            <FieldRenderer
              key={fieldName}
              fieldName={fieldName}
              schema={schema}
              handleInputChange={handleInputChange}
              formErrors={formErrors}
            />
          )
      )}
      <div>
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default Form;
