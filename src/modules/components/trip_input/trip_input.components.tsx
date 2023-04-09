import React from "react";

interface ITripInput {
  name: string;
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

export const TripInput = ({ name, value, setValue }: ITripInput) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="d-flex justify-content-between mt-2">
      <h3 className="trip-input mw-50" style={{ maxWidth: "50%" }}>
        {name}
      </h3>
      <div className="input-group w-50">
        <div className="input-group-prepend"></div>
        <input
          onChange={onChangeHandler}
          type="text"
          className="form-control"
          placeholder={`${name}...`}
          aria-describedby="basic-addon1"
          value={value}
        />
      </div>
    </div>
  );
};
