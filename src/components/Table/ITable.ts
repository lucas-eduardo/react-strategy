export interface IContainerProps {
  isStriped?: boolean;
  isBordered?: boolean;
  isHovered?: boolean;
  isSmall?: boolean;
}

export interface ITHeadProps {
  isBordered?: boolean;
  isSmall?: boolean;
}

export interface ITBodyProps {
  isStriped?: boolean;
  isBordered?: boolean;
  isHovered?: boolean;
  isSmall?: boolean;
}

export interface ITableProps {
  columns: {
    label: string;
    row: string;
  }[];
  rows: any[];
  isStriped?: boolean;
  isBordered?: boolean;
  isHovered?: boolean;
  isSmall?: boolean;
}
