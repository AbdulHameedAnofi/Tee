import React from 'react';

interface EmbeddedFormProps {
    link: string;
}

const EmbeddedForm: React.FC<EmbeddedFormProps> = (link) => {
    return (
        <div className='flex overflow-auto'>
            <div style={{ width: '100%', height: '100vh' }}>
                <iframe
                    src={link.link}
                    style={{ border: 'none', width: '100%', height: '100%' }}
                    title="Embedded Form"
                />
            </div>
        </div>
    );
};

export default EmbeddedForm;
