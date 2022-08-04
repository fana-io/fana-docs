---
id: attributes
---

# Attributes

Attributes are the primary building block of audiences. They represent specific traits about your users, like location, age, whether they're a beta user, and anything else that you can identify. Attributes are used to build *conditions*, which you can read more about on [the Audiences page.](audiences.md)

## Attribute Dashboard

The main view of the Attributes section is a list of all of your attributes. You can see the key, data type, and when it was created. There is also a Search bar where you can filter by both key and data type.

![img alt](/img/att_dash.png)

## Creating an Attribute

To create an attribute, click on the *Create Attribute* button on the top right of the Attribute Dashboard. Clicking on it will reveal a modal. Attributes only require two pieces of information:


1. **A key**. This is how you will refer to the attribute when building conditions and in your user context as well.
   - Note that the key must be made up of alphanumeric/underscore characters only. It also cannot be changed after creation.
2. **Data type of the attribute**. Fana currently support strings, booleans, and numbers. These will affect the kind of operators you can use in your conditions.

![img alt](/img/att_create.png)
Once you've decided on a key and data type, you can hit Create to create your attribute.

## Attribute Details

Clicking into an attribute on the dashboard will bring up the details page. You can see the key and data type, as well as Related Audiences - a list of all of the audiences this attribute is being used in. There is also a *Delete Attribute* button in the top right.

![img alt](/img/att_dets.png)

## Deleting an Attribute

You can delete an attribute by clicking on the *Delete Attribute* button on the top right of the Attribute Details page. 

You may only delete an attribute if it's not in use by any audiences. If it is in use, it will inform you how many audiences are using it. You can reference the Related Audiences section to see which specific audiences are using the attribute.
