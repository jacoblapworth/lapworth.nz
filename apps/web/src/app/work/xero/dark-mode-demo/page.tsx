'use client'

import {
  Button,
  Checkbox,
  FilterPill,
  Label,
  Panel,
  Search,
  Select,
  Tag,
  TextInput,
  Toggle,
} from '@lapworth/xero'
import { useState } from 'react'

export default function DarkModeDemoPage() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1>Xero Package Dark Mode Demo</h1>
        <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
          <Button onClick={() => setIsDark(!isDark)}>
            Toggle {isDark ? 'Light' : 'Dark'} Mode
          </Button>
        </div>
      </div>

      <div data-theme={isDark ? 'dark' : 'light'}>
        <Panel style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Components Showcase</h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Buttons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button disabled variant="primary">
                Disabled Button
              </Button>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Form Controls</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '400px',
              }}
            >
              <div>
                <Label>Text Input</Label>
                <TextInput placeholder="Enter some text..." />
              </div>
              <div>
                <Label>Search</Label>
                <Search placeholder="Search something..." />
              </div>
              <div>
                <Label>Select</Label>
                <Select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select>
              </div>
              <div
                style={{ alignItems: 'center', display: 'flex', gap: '0.5rem' }}
              >
                <Checkbox />
                <Label>Checkbox Option</Label>
              </div>
              <div
                style={{ alignItems: 'center', display: 'flex', gap: '0.5rem' }}
              >
                <Toggle />
                <Label>Toggle Switch</Label>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Tags & Pills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Tag>Default Tag</Tag>
              <FilterPill>Filter Pill</FilterPill>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Nested Panel</h3>
            <Panel style={{ padding: '1rem' }}>
              <p>
                This is a nested panel to test background layering in dark mode.
              </p>
              <Panel style={{ marginTop: '1rem', padding: '1rem' }}>
                <p>Another nested panel for even more depth.</p>
              </Panel>
            </Panel>
          </div>
        </Panel>
      </div>
    </div>
  )
}
