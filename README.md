# PAKKA - A Trip Packing and Storage App
### Organize your stuff into Containers. Organize your Containers by Event or Location. Plan for events, generate shopping lists, or share packing lists with friends.


## Dependencies:
- react-router-dom
- redux toolkit
- mantine css
- tabler icons(?) (https://mantine.dev/guides/icons/)

## Data types:
- Items
- Containers
- Events
- Locations

## Object Hierarchy

Events <-> Locations
- Containers
-- Items

## Objects
### Containers
- ID
- Name
- Description
- Owner
- Items (array of items + count(s))

### Items
- ID
- Name
- Description
- Owner

### Feature Backlog
- Edit Container (Add Items)
- Packing List
- Shopping List
- Private/Public Lists
- Item Photo