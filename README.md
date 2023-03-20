# Proyecto-DevOps

## Problem:
The zoo "Animales Bonitos" is losing control of the zookeepers and animals, due to the increase in staff and animals in the zoo. Sometimes the people in charge of ordering food do not find contact with the suppliers, causing the zoo to run out of food. In addition, there has been a loss of control and knowledge of which animals are in the different enclosures/habitats of the zoo.

## Proposal
Web/mobile application that allows them to:
- Manage supplier contacts.
- Manage zookeepers.
- Manage zoo enclosures/habitats.
- Manage the animals.
- Control and visualize which habitats are under the care of each zookeeper.
- Control and visualize which animals are residing in each of the enclosures/habitats.

There will be an admin (user of the app/system that will need to use auth) that will be able to:
- Manage the relation between zookeepers-habitats.
- Manage the relation between habitat-animals.
- Register new suppliers.

## Project Constraints
The frontend is going to be develop by an outsourcing company.
The automation Army is only going to develop the backend section of the project.
### Architecture

![Architecture](./assets/architecture.png)
> https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html

### Contribution workflow

All code should be integrated to develop trough a PR.
Each feature branch should be named as:
```
feat_#feat_"feat_name"
```
**Code Review**
Before merging, the code should be reviewed by 2 members.