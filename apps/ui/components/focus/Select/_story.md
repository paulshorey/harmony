This is a restyled Ant design component: <a href="https://ant.design/components/select/" target="_blank">https://ant.design/components/select</a>. In the future, this component could be refactored to not rely on a 3rd party library. Fortunately, because it's abstracted in our own library, any apps that use this component will not need to change their implementations. 

So, in your app do not reference any classNames prefixed with "ant-" or "Mui". Instead, create a new variant here, then pass the variant prop to use your modified style and logic. 
