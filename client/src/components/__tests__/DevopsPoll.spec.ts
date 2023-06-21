import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DevopsPoll from '../DevopsPoll.vue'

describe('DevopsPoll', () => {
  it('renders properly', () => {
    const wrapper = mount(DevopsPoll)
    expect(wrapper.text()).toContain('Which one do you prefer?')
  })
})
