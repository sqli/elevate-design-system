import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from '../../../src/components/Select';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/DataInput/Select',
  component: Select,
  tags: ['autodocs'],
};

export const Default = () => (
  <div className="w-72">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export const WithGroups = () => (
  <div className="w-72">
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export const WithLabel = () => (
  <div className="flex flex-col gap-2 w-72">
    <Label>Country</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Choose a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">France</SelectItem>
        <SelectItem value="us">United States</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="w-72">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Dark mode select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
