import Wrapper from './Wrapper';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import Button from './Button';
import DetailFilterAddress from '@/components/list/DetailFilterDropdown/DetailFilterAddress/DetailFilterAddress';
import { Address } from '@/types/address.types';
import DetailFilterStartsAt from '@/components/list/DetailFilterDropdown/DetailFilterStartsAt/DetailFilterStartsAt';
import HorizontalLine from '@/components/list/DetailFilterDropdown/HorizontalLine/HorizontalLine';
import DetailFilterHourlyPay from '@/components/list/DetailFilterDropdown/DetailFilterHourlyPay/DetailFilterHourlyPay';
import { Container, TopContainer, Title } from './DetailFilterDropdown.styles';

interface Props {
  addressList: Address[];
  onAddressClick: (address: Address) => void;
  onBadgeClick: (address: Address) => void;
  hourlyPay: number;
  setHourlyPay: (hourlyPay: number) => void;
  startsAt: string;
  setStartsAt: (startsAt: string) => void;
  resetFilter: () => void;
  onClick: () => void;
  onClose: () => void;
}

function DetailFilterDropdown({
  addressList,
  onAddressClick,
  onBadgeClick,
  hourlyPay,
  setHourlyPay,
  startsAt,
  setStartsAt,
  resetFilter,
  onClick,
  onClose,
}: Props) {
  return (
    <Wrapper onClose={onClose}>
      <Container>
        <TopContainer>
          <Title>상세 필터</Title>
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </TopContainer>
        <DetailFilterAddress
          addressList={addressList}
          onAddressClick={onAddressClick}
          onBadgeClick={onBadgeClick}
        />
        <HorizontalLine />
        <DetailFilterStartsAt startsAt={startsAt} setStartsAt={setStartsAt} />
        <HorizontalLine />
        <DetailFilterHourlyPay
          hourlyPay={hourlyPay}
          setHourlyPay={setHourlyPay}
        />
        <Button onClick={onClick} onClose={onClose} onReset={resetFilter} />
      </Container>
    </Wrapper>
  );
}

export default DetailFilterDropdown;
