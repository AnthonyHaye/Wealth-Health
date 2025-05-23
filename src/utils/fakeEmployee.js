import { faker } from '@faker-js/faker';

export function generateFakeEmployee() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0],
    startDate: faker.date.past({ years: 2 }).toISOString().split('T')[0],
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    department: faker.helpers.arrayElement(["Sales", "Marketing", "Engineering", "HR", "Legal"]),
  
  };
}

export function generateManyFakeEmployees(count = 100) {
  return Array.from({ length: count }, () => generateFakeEmployee());
}