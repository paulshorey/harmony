import React from 'react';

const StoryText = ({ subtitle, title }: any) => {
  return (
    <div py="24px">
      <div color="pink" fontWeight="400" textAlign="center">
        {title}
      </div>

      <div color="gray700" fontSize="14px" mt="8px" textAlign="center">
        {subtitle}
      </div>
    </div>
  );
};

export default StoryText;
