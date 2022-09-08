import { css } from '@emotion/react';
import Text from '@spiral/ui/src/features/common/atoms/Text';
import Box from '@spiral/ui/src/features/common/atoms/Box';
import Button from '@spiral/ui/src/features/common/atoms/Button';
import Flex from '@spiral/ui/src/features/common/atoms/Flex';
import Heading from '@spiral/ui/src/features/common/atoms/Heading';
import { NextSeo } from 'next-seo';
import React from 'react';
import {
  HELP_CENTER_HREF,
  SUPPORT_HREF_PHONE,
  SUPPORT_PHONE,
} from 'src/constants';
// import CharityPromoLogoFeature from 'src/features/b2b2c/organisms/CharityPromoLogoFeature';

type AuthLayoutProps = {
  back?: () => void;
  backText?: string;
  children?: React.ReactNode;
  customizeMobileText?: boolean;
  formId?: string;
  headerImage?: React.ReactNode;
  hideFooter?: boolean;
  isEdit?: boolean;
  isNextEnabled?: boolean;
  loading?: boolean;
  mobileSubtitle?: string;
  mobileTitle?: string;
  navLinkHref?: string;
  navLinkText?: string;
  next?: (args?: any) => void;
  nextText?: string;
  phoneNumber?: string;
  pretitle?: string;
  showConfetti?: boolean;
  skip?: () => void;
  skipText?: string;
  subtitle?: string;
  termsText?: string | React.ReactNode;
  title?: string;
  variant: 'login' | 'forgotPassword' | 'status' | 'documents';
};

// const LoginMobileLayout: React.FC<AuthLayoutProps> = ({
//   headerImage,
//   children,
//   title,
//   subtitle,
//   phoneNumber,
//   mobileTitle,
//   mobileSubtitle,
//   variant = 'login',
//   hideFooter = false,
//   customizeMobileText = false,
//   next,
//   nextText = 'Next',
//   back,
//   backText = 'Back',
//   isEdit = false,
//   isNextEnabled = false,
//   termsText,
//   formId,
//   showConfetti,
//   loading,
// }) => {
//   const variants = {
//     login: {
//       nav: (
//         <Flex as="nav" alignItems="start" width="100%">
//           <div>
//             <Flex justifyContent="flex-start">
//               <CharityPromoLogoFeature />
//             </Flex>
//             {(mobileTitle || title) && (
//               <Heading as="h1" fontWeight={300} textAlign="left" color="pink" fontSize={26}>
//                 {customizeMobileText ? mobileTitle : title}
//               </Heading>
//             )}
//             {(mobileSubtitle || subtitle) && (
//               <>
//                 <Text fontSize={16} mt={2}>
//                   {customizeMobileText ? mobileSubtitle : subtitle}
//                 </Text>
//                 <Text fontSize={16} mt={1}>
//                   {phoneNumber}
//                 </Text>
//               </>
//             )}
//           </div>
//           <Box width={32}>
//             <Link href="/auth/login" passHref>
//               <a>
//                 <img alt="Spiral Logo" width="100%" src="/images/logo-square.png" />
//               </a>
//             </Link>
//           </Box>
//         </Flex>
//       ),
//     },
//     forgotPassword: {
//       nav: (
//         <Box as="nav" textAlign="center" width="100%">
//           <Flex justifyContent="center">
//             <CharityPromoLogoFeature />
//           </Flex>

//           {(mobileTitle || title) && (
//             <Heading as="h1" fontWeight={300} color="black" fontSize={26} lineHeight={'30px'}>
//               {customizeMobileText ? mobileTitle : title}
//             </Heading>
//           )}
//           {(mobileSubtitle || subtitle) && (
//             <Text fontSize={16} color="#414D54" mt={18} lineHeight={'24px'}>
//               {customizeMobileText ? mobileSubtitle : subtitle}
//             </Text>
//           )}
//         </Box>
//       ),
//     },
//   };
//   return (
//     <Flex
//       flexDirection="column"
//       py={20}
//       px={34}
//       backgroundImage={
//         showConfetti
//           ? "url('https://res.cloudinary.com/spiral/image/upload/w_1200,h_100,g_east,c_crop/v1622132263/home-page/confetti.gif')"
//           : undefined
//       }
//       backgroundSize="contain"
//       backgroundRepeat="no-repeat"
//     >
//       {headerImage && headerImage}
//       {variants[variant].nav}

//       <Box
//         as="main"
//         pt={22}
//         flexGrow={1}
//         width="100%"
//         display="flex"
//         flexDirection="column"
//         justifyContent="space-between"
//       >
//         <Box>{children}</Box>

//         <div>
//           {termsText && (
//             <Flex justifyContent="center">
//               <Text
//                 maxWidth={400}
//                 mx="auto"
//                 color="gray"
//                 textAlign="left"
//                 fontSize="13px"
//                 lineHeight="17px"
//                 mt={16}
//                 css={css`
//                   a {
//                     text-decoration: underline;
//                   }
//                 `}
//               >
//                 {termsText}
//               </Text>
//             </Flex>
//           )}

//           {next && (
//             <>
//               <Box mt={4}>
//                 <Button
//                   type={formId ? 'submit' : 'button'}
//                   form={formId}
//                   label={nextText}
//                   onClick={formId ? undefined : next}
//                   disabled={!isNextEnabled}
//                   width="100%"
//                   size="xl"
//                   isLoading={loading}
//                 >
//                   {nextText}
//                 </Button>
//               </Box>
//             </>
//           )}
//           {back && !isEdit && (
//             <Box mt={'12px'}>
//               <Button size="xl" width="100%" variant="ghost" colorScheme="gray400" onClick={back}>
//                 {backText}
//               </Button>
//             </Box>
//           )}
//         </div>
//       </Box>

//       {!hideFooter && (
//         <Box
//           mt={70}
//           as="footer"
//           textAlign="center"
//           borderTop="1px solid #E8EAEB"
//           pt={3}
//           width="100%"
//         >
//           <Text fontWeight="400" fontSize={14}>
//             Need help?
//           </Text>
//           <Text mt={3} fontSize={14}>
//             The Spiral Support Team is standing by and waiting to help you
//           </Text>
//           <Text
//             as="a"
//             display="block"
//             href={HELP_CENTER_HREF}
//             target="_blank"
//             mt={2}
//             color="pink"
//             fontSize={14}
//           >
//             Try our knowledge base{' '}
//           </Text>
//           <Text as="a" mt={2} color="pink" fontSize={14} href={SUPPORT_HREF_PHONE} display="block">
//             Call us at {SUPPORT_PHONE}
//           </Text>
//         </Box>
//       )}
//     </Flex>
//   );
// };

const LoginDesktopLayout: React.FC<AuthLayoutProps> = ({
  back,
  backText = 'Back',
  children,
  formId,
  headerImage,
  hideFooter = false,
  isEdit = false,
  isNextEnabled = false,
  loading,
  next,
  nextText = 'Next',
  phoneNumber,
  pretitle,
  showConfetti,
  skip,
  skipText = 'Skip',
  subtitle,
  termsText,
  // navLinkText = '',
  // navLinkHref = '',
  title,
  variant,
}) => {
  const variants = {
    forgotPassword: {
      title: (
        <>
          <Heading
            as="h2"
            color="#000"
            data-testid="layout-title"
            fontSize={26}
            fontWeight={300}
            lineHeight={'34px'}
            textAlign="center"
          >
            {title}
          </Heading>
          {subtitle && (
            <Text
              as="p"
              color="gray700"
              data-testid="layout-subtitle"
              fontSize={20}
              fontWeight={300}
              lineHeight={'28px'}
              mt={'10px'}
              textAlign="center"
            >
              {subtitle}
            </Text>
          )}
        </>
      ),
    },
    login: {
      title: (
        <>
          <Heading
            as="h2"
            color="pink"
            data-testid="login-title"
            fontSize={30}
            fontWeight={300}
            textAlign="center"
          >
            {title}
          </Heading>
          {subtitle && (
            <>
              <Text
                as="p"
                color="black"
                data-testid="login-subtitle"
                fontSize={20}
                fontWeight={300}
                lineHeight={'28px'}
                mt={'10px'}
                textAlign="center"
              >
                {subtitle}
              </Text>
              {phoneNumber && (
                <Text
                  as="p"
                  color="black"
                  fontSize={20}
                  fontWeight={300}
                  lineHeight={'28px'}
                  textAlign="center"
                >
                  {phoneNumber}
                </Text>
              )}
            </>
          )}
        </>
      ),
    },
    status: {
      title: (
        <Flex>
          <Box data-testid="status-image" mr={'31px'}>
            {headerImage}
          </Box>
          <Flex alignItems={'flex-start'} flexDirection={'column'}>
            <Heading
              as="h2"
              color="#000"
              data-testid="status-title"
              fontSize={24}
              fontWeight={300}
              lineHeight={'29px'}
              textAlign="left"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                as="p"
                color="gray700"
                data-testid="status-subtitle"
                fontSize={17}
                fontWeight={400}
                lineHeight={'20px'}
                mt={'5px'}
                textAlign="left"
              >
                {subtitle}
              </Text>
            )}
          </Flex>
        </Flex>
      ),
    },
  };

  return (
    <Box position="relative">
      <Box
        as="main"
        margin={'0 auto'}
        maxWidth={{ sm: 610, xs: '100%' }}
        mx="auto"
        position="relative"
        pt={17}
      >
        {pretitle && (
          <Heading
            as="h1"
            data-testid="pretitle"
            fontFamily="helvetica"
            fontSize={variant === 'status' || variant === 'documents' ? 16 : 32}
            fontWeight={variant === 'documents' ? 700 : 300}
            ml={'23px'}
          >
            {pretitle}
          </Heading>
        )}
        <Box
          backgroundImage={
            showConfetti
              ? "url('https://res.cloudinary.com/spiral/image/upload/w_1200,h_200,g_east,c_crop/v1622132263/home-page/confetti.gif')"
              : undefined
          }
          backgroundPosition="center -50px"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          bg="white"
          border="1px solid"
          borderColor="#D3D8DA"
          borderRadius={18}
          css={{ boxShadow: '0 1px 5px 0 rgba(111, 126, 130, 0.25)' }}
          mt={variant === 'status' ? 0 : 4}
        >
          {headerImage && variant !== 'status' && headerImage}
          <Box
            px={variant === 'status' || variant === 'documents' ? 30 : 80}
            py={variant === 'status' || variant === 'documents' ? 30 : 40}
          >
            {/* <Flex position="relative" justifyContent="center">
              <CharityPromoLogoFeature />
            </Flex> */}
            <>
              {title && (
                <Box mb={'10px'}>
                  {variants[variant as keyof typeof variants].title}
                </Box>
              )}
              <Box px={27}>{children}</Box>

              <Box px={27}>
                {next && (
                  <Box mt={36}>
                    <Button
                      data-testid="button-next"
                      disabled={!isNextEnabled}
                      form={formId}
                      isLoading={loading}
                      label={nextText}
                      onClick={formId ? undefined : next}
                      size="xl"
                      type={formId ? 'submit' : 'button'}
                      width="100%"
                    >
                      {nextText}
                    </Button>
                  </Box>
                )}
                {skip && (
                  <Box mt={'12px'} textAlign="center">
                    <Button
                      colorScheme="pink"
                      data-testid="button-skip"
                      onClick={skip}
                      size="sm"
                      variant="ghost"
                      width="100%"
                    >
                      {skipText}
                    </Button>
                  </Box>
                )}
                {back && !isEdit && (
                  <Box mt={'12px'} textAlign="center">
                    <Button
                      colorScheme="gray400"
                      data-testid="button-back"
                      onClick={back}
                      size="xl"
                      variant="ghost"
                      width="100%"
                    >
                      {backText}
                    </Button>
                  </Box>
                )}
              </Box>
            </>
          </Box>
        </Box>
      </Box>
      {termsText && (
        <Box
          color="gray"
          css={css`
            a {
              text-decoration: underline;
            }
          `}
          fontSize="13px"
          lineHeight="17px"
          maxWidth={440}
          mt={'30px'}
          mx="auto"
          position="relative"
          textAlign="center"
        >
          {termsText}
        </Box>
      )}

      {!hideFooter && (
        <Box
          as="footer"
          mt={70}
          position="relative"
          textAlign="center"
          width="100%"
        >
          <Text fontWeight="400">Need help?</Text>
          <Text mt={3}>
            The Spiral Support Team is standing by and waiting to help you
          </Text>
          <Box mt={2}>
            <Text as="a" color="pink" href={HELP_CENTER_HREF} target="_blank">
              Try our knowledge base{' '}
            </Text>
            <Box as="span" px={2}>
              •
            </Box>{' '}
            <Text as="a" color="pink" href={SUPPORT_HREF_PHONE}>
              Call us at {SUPPORT_PHONE}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, ...rest }) => {
  // const { isMobile } = useViewport();

  // return isMobile ? (
  //   <LoginMobileLayout {...rest}>{children}</LoginMobileLayout>
  // ) : (
  return <LoginDesktopLayout {...rest}>{children}</LoginDesktopLayout>;
  // );
};

const Layout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <>
      <NextSeo
        description={props.subtitle || undefined}
        title={props.title ? `Spiral - ${props.title}` : undefined}
      />
      <AuthLayout {...props} />
    </>
  );
};

export default React.memo(Layout);
