import React from 'react';
import { Checkbox } from '../../../src/components/Checkbox';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/DataInput/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export const Default = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
);

export const Checked = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="checked" defaultChecked />
    <Label htmlFor="checked">Already checked</Label>
  </div>
);

export const Disabled = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="disabled" disabled />
    <Label htmlFor="disabled">Disabled checkbox</Label>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="dark-1" />
        <Label htmlFor="dark-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="dark-2" defaultChecked />
        <Label htmlFor="dark-2">Option 2 (checked)</Label>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
