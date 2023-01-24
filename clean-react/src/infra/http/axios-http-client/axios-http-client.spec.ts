import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from "@/infra/test"
import axios from "axios"
import { mockPostRequest } from "@/data/test/mock-http-post"

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}


describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const req = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(req)

    expect(mockedAxios.post).toHaveBeenCalledWith(req.url, req.body);
  })
  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())

    expect(promise).toEqual(mockedAxios.post.mock.results[0].value) // results[0] retorna o valor do resolved value, results[1] rejectValue
  })
})