import React from 'react';
import { useFocusIdx } from '@shining-it/easy-email-editor';
import { RadioGroupField } from '../../../components/Form';

const options = [
  {
    value: 'left',
    get label() {
      return t('left');
    },
  },
  {
    value: 'center',
    get label() {
      return t('center');
    },
  },
  {
    value: 'right',
    get label() {
      return t('right');
    },
  },
];

const optionsWithJustify = [
  ...options,
  {
    value: 'justify',
    get label() {
      return t('justify');
    },
  },
];

export function Align({ supportJustify = false }: { supportJustify?: boolean }) {
  const { focusIdx } = useFocusIdx();

  return (
    <RadioGroupField
      label={t('Align')}
      name={`${focusIdx}.attributes.align`}
      options={supportJustify ? optionsWithJustify : options}
    />
  );
}
