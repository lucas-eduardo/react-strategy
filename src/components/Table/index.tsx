import { ITableProps } from './ITable';

import { Container, WrapperHead, WrapperBody } from './styles';

const Table = ({
  columns,
  rows,
  isStriped,
  isBordered,
  isHovered,
  isSmall,
}: ITableProps) => (
  <Container isBordered={isBordered}>
    <WrapperHead isBordered={isBordered} isSmall={isSmall}>
      <tr>
        {columns.map(({ label }, index) => (
          <th key={index}>{label}</th>
        ))}
      </tr>
    </WrapperHead>

    <WrapperBody
      isStriped={isStriped}
      isBordered={isBordered}
      isHovered={isHovered}
      isSmall={isSmall}
    >
      {rows.map((row, index) => (
        <tr key={index}>
          {columns.map((column, index) => (
            <td key={index}>{row[column.row]}</td>
          ))}
        </tr>
      ))}
    </WrapperBody>
  </Container>
);

export { Table };
