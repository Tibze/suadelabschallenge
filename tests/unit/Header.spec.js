import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('render title', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    const title = wrapper.find('h2')
    expect(title.text()).toBe('Suade Labs Challenge')
  })
  it('render menu', () => {
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    const menu = wrapper.find('.menu')
    expect(menu.find('li:first-of-type').text()).toBe('Dashboard')
    expect(menu.find('li:last-of-type').text()).toBe('Bonus')
  })
})
