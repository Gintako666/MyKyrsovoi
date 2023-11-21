import { FC } from 'react';

import { IHandleChange } from '~/hooks/useAddForm';

import handleClassName from '~/utils/className.util';
import Name from './Name';
import Description from './Description';
import Color from './Color';

interface AddFormProps {
  className: string;
  modifier?: string;
  type: string;
  button?: boolean;
  name?: string;
  description?: string;
  color?: string;
  onChange: IHandleChange;
  select?: string[]
}

const AddForm: FC<AddFormProps> = ({
  className,
  modifier,
  type,
  button,
  name,
  description,
  color,
  onChange,
  select,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${ className }__add-form`,
    modifier,
  );

  return (
    <div className={ `${ modifiedClassName } add-form` }>
      {typeof name === 'string' && (
        <Name type={ type } name={ name } onChange={ onChange } select={ select } />
      )}
      {typeof description === 'string' && (
        <Description
          type={ type }
          description={ description }
          onChange={ onChange }
        />
      )}
      {typeof color === 'string' && (
        <Color type={ type } color={ color } onChange={ onChange } />
      )}
      {button && (
        <button type="submit" disabled={ !name } className="add-form__button button">
          Save
        </button>
      )}
    </div>
  );
};

AddForm.defaultProps = {
  modifier: undefined,
  button: true,
  name: undefined,
  description: undefined,
  color: undefined,
  select: undefined,
};

export default AddForm;
