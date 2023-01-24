import axios from "axios"
import { faker } from "@faker-js/faker"

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios> //acesso recursos do axios, cacheado
  mockedAxios.post.mockResolvedValue({
    data: faker.science.chemicalElement(),
    status: faker.random.numeric
  })
  return mockedAxios
}