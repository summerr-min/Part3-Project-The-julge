import ADDRESS from '@/constants/Address';
import { Address } from '@/types/address.types';
import DetailFilterAddressBadge from '@/components/list/DetailFilterDropdown/DetailFilterAddressBadge/DetailFilterAddressBadge';
import DetailFilterSection from '@/components/list/DetailFilterDropdown/DetailFilterSection/DetailFilterSectionName';
import {
  Wrapper,
  AddressContainer,
  AddressItem,
  AddressBadgeContainer,
} from './DetailFilterAddress.styels';

interface Props {
  addressList: Address[];
  onAddressClick: (address: Address) => void;
  onBadgeClick: (address: Address) => void;
}

function DetailFilterAddress({
  addressList,
  onAddressClick,
  onBadgeClick,
}: Props) {
  const handleAddressClick = (address: Address) => {
    onAddressClick(address);
  };

  return (
    <Wrapper>
      <DetailFilterSection>위치</DetailFilterSection>
      <AddressContainer>
        {ADDRESS.map((value) => (
          <AddressItem key={value}>
            <button type="button" onClick={() => handleAddressClick(value)}>
              {value}
            </button>
          </AddressItem>
        ))}
      </AddressContainer>
      <AddressBadgeContainer>
        {addressList.map((address) => (
          <li key={address}>
            <DetailFilterAddressBadge
              address={address}
              onClick={onBadgeClick}
            />
          </li>
        ))}
      </AddressBadgeContainer>
    </Wrapper>
  );
}

export default DetailFilterAddress;
