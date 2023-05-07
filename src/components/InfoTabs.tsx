import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className:string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function InfoTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className='bg-white border-2 border border-black' label="Bearish Candlestick Patterns" {...a11yProps(0)} />
          <Tab className='bg-white border-2 border border-black' label="Understanding Candlestick Charts for Beginners" {...a11yProps(1)} />
          <Tab className='bg-white border-2 border border-black' label="Bullish Candlestick Patterns" {...a11yProps(2)} />
          <Tab className='bg-white border-2 border border-black' label="The ULTIMATE Beginner's Guide to CANDLESTICK PATTERNS" {...a11yProps(3)} />
          <Tab className='bg-white border-2 border border-black' label="Bearish Candlestick Patterns" {...a11yProps(4)} />
          </Tabs>
      </Box>

      
      <TabPanel value={value} index={0} className='text-center bg-primary border-bottom border-black border-2'>
      <h5><a className='text-decoration-none' href='https://www.ig.com/us/trading-strategies/16-candlestick-patterns-every-trader-should-know-180615'>
                    16 Candlestick Patterns Every Trader Should Know | IG US</a></h5>
                
                <iframe src='//players.brightcove.net/2830693144001/8d914a8e-0772-4b65-b040-afb00fc98328_default/index.html?videoId=6167505049001'></iframe>
            
      </TabPanel>

      <TabPanel value={value} index={1} className='text-center bg-primary border-bottom border-black border-2'>
        <h5><a className='text-decoration-none' href='https://www.youtube.com/embed/1rwVV_8uUxc'>
                Understanding Candlestick Charts for Beginners</a></h5>
                
        <iframe src="https://www.youtube.com/embed/1rwVV_8uUxc"></iframe>
      </TabPanel>

      <TabPanel value={value} index={2} className='text-center bg-primary border-bottom border-black border-2'>
        <h5><a className='text-decoration-none' href='https://centerpointsecurities.com/bullish-candlestick-patterns/'>
                        Bullish Candlestick Patterns</a></h5>
                    
        <iframe  src="https://www.youtube.com/embed/zyqo7ylkJpM"></iframe>
      </TabPanel>

      <TabPanel value={value} index={3} className='text-center bg-primary border-bottom border-black border-2'>
        <h5><a className='text-decoration-none' href='https://www.youtube.com/watch?v=v21T94-jXeY'>
                The ULTIMATE Beginner's Guide to CANDLESTICK PATTERNS</a></h5>
                    
        <iframe src="https://www.youtube.com/embed/v21T94-jXeY"></iframe>
      </TabPanel>

      <TabPanel value={value} index={4} className='text-center bg-primary border-bottom border-black border-2'>
        <h5><a className='text-decoration-none' href='Bearish Candlestick Patterns'>
                Bearish Candlestick Patterns</a></h5>
                    
        <iframe src="https://www.forextime.com/education/bearish-candlestick-patterns"></iframe>
      </TabPanel>
    </Box>
  );
}