import { Address } from '@/types/address.types';
import CloseIcon from '@/assets/icons/close_primary_icon.svg?react';
import { Badge, AddressText } from './DetailFilterAddressBadge.styles';

interface Props {
  address: Address;
  onClick: (address: Address) => void;
}

function DetailFilterAddressBadge({ address, onClick }: Props) {
  return (
    <Badge>
      <AddressText>{address}</AddressText>
      <button type="button" onClick={() => onClick(address)}>
        <CloseIcon />
      </button>
    </Badge>
  );
}

export default DetailFilterAddressBadge;
