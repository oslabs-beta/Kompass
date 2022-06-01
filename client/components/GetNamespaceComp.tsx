import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const GetNamespaceComp = (props: any): JSX.Element => {
  const { items } = props.namespaceInfo || {};
  const [ns, setNs] = React.useState('');
  // const { items } = names || {};
  // console.log('ns', items);

  let allNamespaces: string[] = [];

  if (items) {
    allNamespaces = items.map((item: any) => {
      const name: string = item.metadata.name;
      return <MenuItem value={name}>{name}</MenuItem>;
    });
  }

  const handleNamespaceChange = (e: any): void => {
    console.log('getcomp ns', e.target.value);
    setNs(e.target.value as string);
    props.fetchPodData(e.target.value);
    // props.fetchNodeData(ns)
  };

  return (
    <div>
      <Box sx={{ minWidth: 400, mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>
            Namespace (default)
          </InputLabel>
          <Select
            // labelId='demo-simple-select-label'
            id='drop-down'
            value={ns}
            // label='default'
            onChange={handleNamespaceChange}
          >
            {allNamespaces}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default GetNamespaceComp;
