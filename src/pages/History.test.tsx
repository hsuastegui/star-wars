import React from "react";
import { shallow } from 'enzyme';
import History from './History';

const stack = [[{ "name": "R2-D2", "value": 96 }, { "name": "Bail Prestor Organa", "value": 191 }], [{ "name": "J-type diplomatic barge", "value": 0.7 }, { "name": "Naboo fighter", "value": 1 }], [{ "name": "TIE Advanced x1", "value": 1 }, { "name": "Star Destroyer", "value": 2 }], [{ "name": "Bail Prestor Organa", "value": 191 }, { "name": "Adi Gallia", "value": 184 }]]

describe("History", () => {
    it("renders", () => {
        const wrapper = shallow(<History stack={stack} />)
        expect(wrapper).toMatchSnapshot();
    })
})