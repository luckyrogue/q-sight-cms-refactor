export type TAddLevelData = {
  companyId: number | null;
  name: string;
  parentId: number | null;
};

export type TAddLevelFormProps = {
  parentId: number | null;
  setIsAdding: (value: boolean) => void;
  handleCancelAdd: () => void;
};
