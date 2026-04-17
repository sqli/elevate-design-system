import React from 'react';
import { Switch } from '../../../src/components/Switch';
import { Label } from '../../../src/components/Label';
import { DarkModeWrapper, darkModeParameters } from '../../utils/story-helpers';

export default {
  title: 'Components/DataInput/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export const Default = () => (
  <div className="flex items-center gap-2">
    <Switch id="switch" />
    <Label htmlFor="switch">Toggle this</Label>
  </div>
);

export const Checked = () => (
  <div className="flex items-center gap-2">
    <Switch id="switch-on" defaultChecked />
    <Label htmlFor="switch-on">Enabled</Label>
  </div>
);

export const Disabled = () => (
  <div className="flex items-center gap-2">
    <Switch id="switch-disabled" disabled />
    <Label htmlFor="switch-disabled">Disabled</Label>
  </div>
);

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Switch id="dark-switch-1" />
        <Label htmlFor="dark-switch-1">Dark mode switch</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="dark-switch-2" defaultChecked />
        <Label htmlFor="dark-switch-2">Active switch</Label>
      </div>
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
