import { shallowMount } from '@vue/test-utils';
import SelectElement from '@/components/SelectElement';

describe('SelectElement', () => {
  it('renders props.waypointList when passed', async () => {
    const waypointList = 'selection';
    const wrapper = shallowMount(SelectElement, {
      propsData: { waypointList: [waypointList] },
    });
    expect(wrapper.text()).toBe(waypointList);
  });
});
