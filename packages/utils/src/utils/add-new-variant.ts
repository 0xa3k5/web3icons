import { TType, TVariant, TMetadata } from '@web3icons/common'
import { updateMetadataJson } from '.'

export const addNewVariant = async (
  existingMetadata: TMetadata,
  type: TType,
  newVariants: TVariant[],
): Promise<void> => {
  const updatedVariants = [...new Set([...existingMetadata.variants, ...newVariants])]
  existingMetadata.variants = updatedVariants

  await updateMetadataJson(existingMetadata, type)
}
