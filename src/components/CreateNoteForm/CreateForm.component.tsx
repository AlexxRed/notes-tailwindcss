import { FC } from 'react';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import createdNoteValidation from '../../services/consts/validation/createdNoteValidation';
import { INote } from '../../services/types/note.types';
import { COLORS } from '../../services/theme';
import { useNavigate } from "react-router-dom";
import { Form, Field  } from 'formik';


interface IProps {
    data: INote;
    onSave: (item: INote) => void;
    title: string;
}

const CreateFormComponent: FC<IProps> = ({ data, onSave, title }) => {
    const navigate = useNavigate();

    const handleSubmit = (values: INote, { resetForm }: FormikHelpers<INote>) => {
        onSave(values);
        resetForm();
        navigate('/')
    };

    const renderError = (message: string) => <div style={{ color: COLORS.red }}>{message}</div>;

    return (
    <div className='flex text-center justify-center flex-wrap bg-gray-400 rounded-lg p-10 mt-30 ml-auto mr-auto max-w-xl'>
        <h1 className=' font-bold flex justify-center align-center mt-auto w-full' >{title}</h1>
            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={createdNoteValidation}>
                
                <Form className='block w-80' autoComplete="off">
                <p className='block p-5 w-full'>Category</p>
                <div className='flex align-center justify-around'>
                    <label className='flex flex-col' htmlFor="task">
                        Task
                        <Field className='flex box-content outline-none p-8 mb-8 hover:bg-gray-300' type="radio" name="category" value="Task" />
                    </label>
                            <ErrorMessage name="task" render={renderError} />
                    <label className='flex flex-col' htmlFor="randomthought">
                        Random Thought
                        <Field className='flex box-content outline-none p-4 mb-8 hover:bg-gray-300' type="radio" name="category" value="Random Thought" />
                    </label>
                            <ErrorMessage name="randomthought" render={renderError} />
                    <label className='flex flex-col' htmlFor="idea">
                        Idea
                        <Field className='flex box-content outline-none p-8 mb-8 hover:bg-gray-300' type="radio" name="category" value="Idea" />
                    </label>
                            <ErrorMessage name="idea" render={renderError} />
                </div>
                <label className='flex flex-col' htmlFor="name">
                    <p className='block p-5 w-full'>Name</p>
                    <Field className='flex box-content outline-none p-2 mb-8 hover:bg-gray-300 w-full' type="text" name="name" placeholder="Note name" />
                </label>
                <ErrorMessage name="name" render={renderError} />
                        
                <label className='flex flex-col' htmlFor="content">
                    <p className='block p-5 w-full'>Description</p>
                    <Field className='flex box-content outline-none p-2 mb-8 hover:bg-gray-300 w-full'
                    component="textarea"
                    rows="5"
                    name="content"
                    placeholder="Your Note here"
                    />
                </label>
                <ErrorMessage name="content" render={renderError} />

                <label className='flex flex-col' htmlFor="dates">
                    <p className='block p-5 w-full'>Choose a date</p>
                    <Field className='flex box-content outline-none p-2 mb-8 hover:bg-gray-300 w-full' type="date" name="dates"/>
                </label>
                <ErrorMessage name="dates" render={renderError} />
                    {title === 'Create Note' ? (
                        <button className='block mr-auto ml-auto text-center w-60 bg-white rounded p-5 hover:bg-blue-700' type="submit">Create</button>
                    ) : (
                        <button className='block mr-auto ml-auto text-center w-60 bg-white rounded p-5 hover:bg-blue-700' type="submit">Edit</button>
                    )}
                    </Form>
        </Formik>
        </div>
    );
};

export default CreateFormComponent;