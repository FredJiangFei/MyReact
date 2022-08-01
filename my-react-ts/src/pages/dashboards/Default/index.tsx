import { Typography } from '@mui/material'
import { useTranslation } from "react-i18next";

function Default() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Default Dashboard
      </Typography>
      <Typography variant="subtitle1">
        {t('Welcome back')}, Lucy! {t("We've missed you")}.{' '}
        <span role="img" aria-label="Waving Hand Sign">
          👋
        </span>
      </Typography>
    </>
  )
}

export default Default
