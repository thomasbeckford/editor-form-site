# Editor Form Site

Schema:

- New placeholder atribute for each input
- conditions array

Form:

1.shouldShowField()

- This function receives a fieldName (name,description, etc)
- check in the properties if this field has a condition (for example truncateDescription field has one) (if not, just show the field)
- check if the description inside the condition exists (in this case "description" exists) (if not, just show the field)
- then, in this case we only have lenght, but we could have many conditions for the same field (in the length case, we check if the length is > than 100) (boolean)
- by default we show the field

2.  Create validation for each field
3.  Create custom <SubmitButton /> component

DB:

- Form submition hits a nextjs api (post), and saves the data into the redis db.

Site page:

1. Create a cacheLocal to get data if redis isnt available (if we had some data before)
2. Create a function to fetchData from redis storage
3. Revalidate this data every 5 minutes
