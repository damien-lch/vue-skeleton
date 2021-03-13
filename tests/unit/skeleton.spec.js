import { mount } from "@vue/test-utils";
import Skeleton from "@/Skeleton.vue";

describe("Check correct spelling props", () => {
  //////////////////////////////////
  // WIDTH
  //////////////////////////////////
  it("take props width in px", () => {
    const width = "20px";
    const wrapper = mount(Skeleton, {
      propsData: { width },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "width: 20px"
    );
  });
  it("take props width in %", () => {
    const width = "20%";
    const wrapper = mount(Skeleton, {
      propsData: { width },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "width: 20%"
    );
  });
  it("take props width without % or px", () => {
    const width = "20";
    const wrapper = mount(Skeleton, {
      propsData: { width },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "width: 20px"
    );
  });
  //////////////////////////////////
  // HEIGHT
  //////////////////////////////////
  it("take props height in px", () => {
    const height = "20px";
    const wrapper = mount(Skeleton, {
      propsData: { height },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "height: 20px"
    );
  });
  it("take props height in %", () => {
    const height = "20%";
    const wrapper = mount(Skeleton, {
      propsData: { height },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "height: 20%"
    );
  });
  it("take props height without % or px", () => {
    const height = "20";
    const wrapper = mount(Skeleton, {
      propsData: { height },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "height: 20px"
    );
  });
  //////////////////////////////////
  // COLOR
  //////////////////////////////////
  it("take props color", () => {
    const color = "#FF0000";
    const wrapper = mount(Skeleton, {
      propsData: { color },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "background-color: rgb(255, 0, 0)"
    );
  });
  it("take props color with color name", () => {
    const color = "red";
    const wrapper = mount(Skeleton, {
      propsData: { color },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "background-color: red"
    );
  });
  //////////////////////////////////
  // ROUNDED
  //////////////////////////////////
  it("take props rounded", () => {
    const rounded = true;
    const wrapper = mount(Skeleton, {
      propsData: { rounded },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "border-radius: 50%"
    );
  });
  //////////////////////////////////
  // BORDER RADIUS
  //////////////////////////////////
  it("take props border radius", () => {
    const borderRadius = "20px";
    const wrapper = mount(Skeleton, {
      propsData: { borderRadius },
    });
    expect(wrapper.find(".skeleton").attributes().style).toContain(
      "border-radius: 20px"
    );
  });
});
