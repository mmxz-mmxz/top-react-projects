import React, { useMemo } from "react";

type Props<TFields extends readonly string[]> = {
  fields: TFields;
  onChange: (field: TFields[number], value: string) => void;
};

const Form = <T extends readonly string[]>({
  fields,
  onChange,
}: Props<T>): React.ReactElement => {
  const inputs = useMemo(
    () =>
      fields.map((field) => (
        <div>
          <label htmlFor={field}>{field}</label>
          <input
            id={field}
            name={field}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
        </div>
      )),
    [fields, onChange],
  );

  return <div>{inputs}</div>;
};

export default Form;
