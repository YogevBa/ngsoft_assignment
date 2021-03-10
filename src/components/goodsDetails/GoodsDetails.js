import React, { useEffect, useState } from 'react';
import './goodsDetails.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputFieldText from '../../components/inputFields/inputFieldText/InputFieldText';
import { Button, MenuItem, Select, InputLabel } from '@material-ui/core';
import { text } from '../../textSource';
import { setFormView, saveData } from '../../redux/actions';
import { connect } from 'react-redux';

const GoodsDetails = (props) => {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleSubmit = async (values) => {
    if (values) {
      await props.saveData(values, 'goodsDetails');
      props.setFormView('finalizedForm');
    }
  };

  const handlePrevious = () => {
    props.setFormView('userDetails');
  };

  useEffect(() => {
    if (search.length > 1) {
      setDisplay(true);
      const filteredList = props.filteredList.filter((itm) =>
        itm.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredList(filteredList);
    } else {
      setDisplay(false);
      setFilteredList([]);
    }
  }, [search]);

  return (
    <div className='goodsDetailsForm'>
      <h2 className='subTitle'>{text.goodsFormTitle}</h2>
      <Formik
        initialValues={{
          itemName: props.goodsDetails ? props.goodsDetails.itemName : '',
          category: props.goodsDetails ? props.goodsDetails.category : '',
          itemPorpuse: props.goodsDetails ? props.goodsDetails.itemPorpuse : '',
          requiredAmount: props.goodsDetails
            ? props.goodsDetails.requiredAmount
            : '',
        }}
        validationSchema={Yup.object().shape({
          itemName: Yup.string().required('שדה חובה'),
          category: Yup.string().required('שדה חובה'),
          itemPorpuse: Yup.string().required('שדה חובה'),

          requiredAmount: Yup.number()
            .required('שדה חובה')
            .positive()
            .integer(),
        })}
        onSubmit={(data) => handleSubmit(data)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className='userDetailsForm' onSubmit={handleSubmit}>
            <h4 className='groupTitle'>{text.itemDetails}</h4>

            <div className='groupContainer'>
              <InputFieldText
                label={text.itemName}
                name='itemName'
                type='text'
              />
              <div className='selectStyle'>
                <InputLabel name='category' id='category'>
                  {text.category}
                </InputLabel>
                <Select
                  labelId='category'
                  id='category'
                  name='category'
                  value={values.category}
                  onChange={handleChange}
                >
                  {props.categories
                    ? props.categories.map((itm) => (
                        <MenuItem key={itm.id} value={itm.title}>
                          {itm.title}
                        </MenuItem>
                      ))
                    : []}
                </Select>
              </div>
              <InputFieldText
                label={text.itemPorpuse}
                name='itemPorpuse'
                type='text'
              />
              <InputFieldText
                label={text.requiredAmount}
                name='requiredAmount'
                type='number'
              />
            </div>
            <div className='styledLine'></div>
            <h3 className='groupTitle'>{text.ingredientsList}</h3>
            <div className='itemsListWrapper'>
              <bold>
                אם היה לי עוד יום אולי הייתי מצליח ליישם גם את החלק הזה )-:
              </bold>
            </div>

            <p className='addItemTitle'>{text.addItemTitle}</p>

            <input
              name='searchItem'
              placeholder={text.chooseResult}
              type='text'
              className='searchItemField'
              onChange={(value) => setSearch(value)}
            />

            <div className='buttonsWrapper'>
              <Button
                disabled={props.currentFormView === 'userDetails'}
                onClick={() => handlePrevious()}
              >
                {text.previousBtn}
              </Button>

              <Button type='submit'>{text.nextBtn}</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFormView: state.currentFormView,
    goodsDetails: state.goodsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormView: (value) => dispatch(setFormView(value)),
    saveData: (data, type) => dispatch(saveData(data, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetails);
