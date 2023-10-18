import { FC, PropsWithChildren } from 'react';
import { Container, Divider, Typography, Stack } from '@mui/material';

interface PageTemplateProps {
  title: string;
}

const PageTemplate: FC<PropsWithChildren<PageTemplateProps>> = ({
  title,
  children,
}) => {
  return (
    <Stack width="100%">
      <Container
        sx={{
          pt: { xs: 3, md: 7, lg: '68px' },
          pb: { xs: 3, md: 3, lg: 2 },
        }}
      >
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
      </Container>
      <Divider flexItem />

      {children}
    </Stack>
  );
};

export default PageTemplate;
