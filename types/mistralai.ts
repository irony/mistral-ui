import { OPENAI_API_TYPE } from '../utils/app/const';

export interface MistralModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum MistralModelID {
  MISTRAL_TINY = 'mistral-tiny',
  MISTRAL_SMALL = 'mistral-small',
  MISTRAL_MEDIUM = 'mistral-medium',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = MistralModelID.MISTRAL_MEDIUM;

export const MistralModels: Record<MistralModelID, MistralModel> = {
  [MistralModelID.MISTRAL_TINY]: {
    id: MistralModelID.MISTRAL_TINY,
    name: 'Mistral 7B',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [MistralModelID.MISTRAL_SMALL]: {
    id: MistralModelID.MISTRAL_SMALL,
    name: 'Mistral Small',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [MistralModelID.MISTRAL_MEDIUM]: {
    id: MistralModelID.MISTRAL_MEDIUM,
    name: 'Mistral Medium',
    maxLength: 24000,
    tokenLimit: 8000,
  },
};
