import { Dropdown } from 'primereact/dropdown';
import { useTheme } from '../hooks/useTheme';

const ThemeSelector = () => {
  const { theme, handleChangeTheme } = useTheme();

  const themes = [
    {
      name: 'lara-light-amber',
      bgColor:
        'linear-gradient(rgb(245, 158, 11) 0%, rgba(245, 158, 11, 0.5) 100%)',
    },
    {
      name: 'lara-dark-amber',
      bgColor:
        'linear-gradient(rgb(245, 158, 11) 0%, rgba(245, 158, 11, 0.5) 100%)',
    },
    {
      name: 'lara-light-blue',
      bgColor:
        'linear-gradient(rgb(67, 120, 230) 0%, rgba(67, 120, 230, 0.5) 100%)',
    },
    {
      name: 'lara-dark-blue',
      bgColor:
        'linear-gradient(rgb(67, 120, 230) 0%, rgba(67, 120, 230, 0.5) 100%)',
    },
    {
      name: 'lara-light-cyan',
      bgColor:
        'linear-gradient(rgb(6, 182, 212) 0%, rgba(6, 182, 212, 0.5) 100%)',
    },
    {
      name: 'lara-dark-cyan',
      bgColor:
        'linear-gradient(rgb(6, 182, 212) 0%, rgba(6, 182, 212, 0.5) 100%)',
    },
    {
      name: 'lara-light-green',
      bgColor:
        'linear-gradient(rgb(77, 172, 156) 0%, rgba(77, 172, 156, 0.5) 100%)',
    },
    {
      name: 'lara-dark-green',
      bgColor:
        'linear-gradient(rgb(77, 172, 156) 0%, rgba(77, 172, 156, 0.5) 100%)',
    },
    {
      name: 'lara-light-indigo',
      bgColor:
        'linear-gradient(rgb(88, 95, 224) 0%, rgba(88, 95, 224, 0.5) 100%)',
    },
    {
      name: 'lara-dark-indigo',
      bgColor:
        'linear-gradient(rgb(88, 95, 224) 0%, rgba(88, 95, 224, 0.5) 100%)',
    },
    {
      name: 'lara-light-pink',
      bgColor:
        'linear-gradient(rgb(236, 72, 153) 0%, rgba(236, 72, 153, 0.5) 100%)',
    },
    {
      name: 'lara-dark-pink',
      bgColor:
        'linear-gradient(rgb(236, 72, 153) 0%, rgba(236, 72, 153, 0.5) 100%)',
    },
    {
      name: 'lara-light-teal',
      bgColor:
        'linear-gradient(rgb(20, 184, 166) 0%, rgba(20, 184, 166, 0.5) 100%)',
    },
    {
      name: 'lara-dark-teal',
      bgColor:
        'linear-gradient(rgb(20, 184, 166) 0%, rgba(20, 184, 166, 0.5) 100%)',
    },
    {
      name: 'soho-light',
      bgColor:
        'linear-gradient(rgb(102, 75, 235) 0%, rgba(102, 75, 235, 0.5) 100%)',
    },
    {
      name: 'soho-dark',
      bgColor:
        'linear-gradient(rgb(102, 75, 235) 0%, rgba(102, 75, 235, 0.5) 100%)',
    },
    {
      name: 'viva-light',
      bgColor:
        'linear-gradient(rgb(74, 103, 201) 0%, rgba(74, 103, 201, 0.5) 100%)',
    },
    {
      name: 'viva-dark',
      bgColor:
        'linear-gradient(rgb(74, 103, 201) 0%, rgba(74, 103, 201, 0.5) 100%)',
    },
    {
      name: 'bootstrap4-light-purple',
      bgColor:
        'linear-gradient(rgb(137, 60, 174) 0%, rgba(137, 60, 174, 0.5) 100%)',
    },
    {
      name: 'bootstrap4-dark-purple',
      bgColor:
        'linear-gradient(rgb(137, 60, 174) 0%, rgba(137, 60, 174, 0.5) 100%)',
    },
    {
      name: 'bootstrap4-light-blue',
      bgColor:
        'linear-gradient(rgb(2, 123, 255) 0%, rgba(2, 123, 255, 0.5) 100%)',
    },
    {
      name: 'bootstrap4-dark-blue',
      bgColor:
        'linear-gradient(rgb(2, 123, 255) 0%, rgba(2, 123, 255, 0.5) 100%)',
    },
    {
      name: 'mdc-light-deeppurple',
      bgColor:
        'linear-gradient(rgb(112, 47, 146) 0%, rgba(112, 47, 146, 0.5) 100%)',
    },
    {
      name: 'mdc-dark-deeppurple',
      bgColor:
        'linear-gradient(rgb(112, 47, 146) 0%, rgba(112, 47, 146, 0.5) 100%)',
    },
    {
      name: 'mdc-light-indigo',
      bgColor:
        'linear-gradient(rgb(5, 101, 242) 0%, rgba(5, 101, 242, 0.5) 100%)',
    },
    {
      name: 'mdc-dark-indigo',
      bgColor:
        'linear-gradient(rgb(5, 101, 242) 0%, rgba(5, 101, 242, 0.5) 100%)',
    },
  ];

  const themeOptionTemplate = (option: any) => {
    return (
      <div className="flex items-center gap-2">
        <div
          className="w-5 h-5 rounded-sm"
          style={{ background: option.bgColor }}
        ></div>
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div>
      <Dropdown
        value={theme}
        valueTemplate={<div>{theme}</div>}
        onChange={(e) => {
          handleChangeTheme(e.value.name);
        }}
        options={themes}
        optionLabel="name"
        placeholder="Select a Theme"
        itemTemplate={themeOptionTemplate}
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default ThemeSelector;
