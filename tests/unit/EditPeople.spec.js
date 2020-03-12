import { shallowMount } from '@vue/test-utils'
import EditPeople from '@/components/EditPeople.vue'

describe('EditPeople.vue', () => {
  it('render name in table with props data', () => {
    const props = {
      peoples: [
        {
          _id: '5d5d7ad6b0e83bc2d9d67dfb',
          age: 28,
          eyeColor: 'brown',
          name: 'Stephens Townsend',
          gender: 'male',
          location: {
            latitude: 26.723281,
            longitude: 99.391104
          },
          preferences: {
            pet: 'bird',
            fruit: 'apple'
          }
        },
        {
          _id: '5d5d7ad625ceac160b06721f',
          age: 25,
          eyeColor: 'blue',
          name: 'Padilla Blair',
          gender: 'male',
          location: {
            latitude: 31.288038,
            longitude: -56.647435
          },
          preferences: {
            pet: 'cat',
            fruit: 'strawberry'
          }
        }
      ]
    }

    const wrapper = shallowMount(EditPeople, {
      propsData: props
    })
    const tbody = wrapper.findAll('tr')
    const firstRow = tbody.at(1)
    expect(firstRow.find('.name').text()).toBe('Stephens Townsend')
    const secondRow = tbody.at(2)
    expect(secondRow.find('.name').text()).toBe('Padilla Blair')
  })
})
