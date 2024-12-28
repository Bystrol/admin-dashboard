'use client';

import { EnFlagIcon } from '@/icons/en-flag';
import { PlFlagIcon } from '@/icons/pl-flag';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { Typography, Button, Popover, Box } from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';

export const LanguagePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();

  const handleClickAnchorElement = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleLanguageOptionClick = (callbackFn: () => void) => {
    callbackFn();
    handleClosePopover();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'language-popover' : undefined;

  const icon: Record<typeof locale, ReactNode> = {
    en: <EnFlagIcon />,
    pl: <PlFlagIcon />,
  };

  const options: { label: string; icon: ReactNode; onClick: () => void }[] = [
    {
      label: t('languages.english'),
      icon: <EnFlagIcon />,
      onClick: () => changeLocale('en'),
    },
    {
      label: t('languages.polish'),
      icon: <PlFlagIcon />,
      onClick: () => changeLocale('pl'),
    },
  ];

  return (
    <>
      <Button
        sx={{ borderRadius: '100%', minWidth: 0, width: 36, height: 36 }}
        aria-describedby={id}
        onClick={handleClickAnchorElement}
      >
        {icon[locale]}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'background.default' }}
        >
          {options.map((option) => (
            <Button
              key={option.label}
              sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start', alignItems: 'center' }}
              onClick={() => handleLanguageOptionClick(option.onClick)}
            >
              {option.icon}
              <Typography variant="body2" color="textPrimary">
                {option.label}
              </Typography>
            </Button>
          ))}
        </Box>
      </Popover>
    </>
  );
};
