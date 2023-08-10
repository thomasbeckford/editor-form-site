export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    heading: {
      title: 'Heading',
      type: 'string',
      placeholder: 'heading',
    },
    description: {
      title: 'Description',
      type: 'string',
      placeholder: 'description',
    },
    primaryButtonText: {
      title: 'Primary Button Text',
      type: 'string',
      placeholder: 'primary button text',
    },
    secondaryButtonText: {
      title: 'Secondary Button Text',
      type: 'string',
      placeholder: 'secondary button text',
    },
    truncateDescription: {
      title: 'Truncate Description',
      type: 'boolean',
      conditions: [
        {
          field: 'description',
          operator: 'length',
          value: 100,
        },
      ],
    },
  },
  required: [
    'heading',
    'description',
    'primaryButtonText',
    'secondaryButtonText',
  ],
};

export type SchemaType = {
  type: string;
  properties: {
    [key: string]: {
      title: string;
      type: string;
      placeholder?: string;
      conditions: {
        field: string;
        operator: string;
        value: number | string;
      }[];
    };
  };
  required: string[];
};
