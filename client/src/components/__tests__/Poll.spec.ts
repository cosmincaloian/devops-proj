import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Poll from '../Poll.vue'

describe('Poll', () => {
  it('renders properly', () => {
    const wrapper = mount(Poll)
    expect(wrapper.text()).toContain('Which one do you prefer?')
  })
})
