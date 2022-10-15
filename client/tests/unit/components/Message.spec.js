import { shallowMount } from '@vue/test-utils';
import Message from '@/components/Message';

describe('Message', () => {
  it('renders props.message when passed', () => {
    const message = 'new message';
    const wrapper = shallowMount(Message, {
      propsData: { message },
    });
    expect(wrapper.text()).toBe(message);
  });

  it('renders default message if not passed a prop', () => {
    const defaultMessage = '';
    const wrapper = shallowMount(Message);
    expect(wrapper.text()).toBe(defaultMessage);
  });
});
