import React from 'react';
import cx from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TogglesControl from '../../controls/toggles';
import TransitionsLabels from './labels';

const CoverageAuxiliarControls = ({
  viewOptionsIndex,
  handleViewOptionsIndexSelect,
  baseMaps,
  availableBaseMaps,
  handleBaseMapsChange,
  layers,
  availableLayers,
  handleLayersChange
}) => (
  <Tabs
      className="map-panel__action-panel map-panel__tab-panel"
      selectedIndex={viewOptionsIndex}
      onSelect={handleViewOptionsIndexSelect}>
    <TabList className="three-tabbed">
      <Tab>{I18n.t('map.index.transitions.labels.title')}</Tab>
      <Tab>{I18n.t('map.index.base_maps.title')}</Tab>
      <Tab>{I18n.t('map.index.layers.title')}</Tab>
    </TabList>
    <TabPanel>
      <TransitionsLabels
        calcMaxHeight={() => (
          $('#transitions-auxiliar-controls').height() - 55
        )}
      />
    </TabPanel>
    <TabPanel>
      <TogglesControl
        className="map-panel__content"
        options={baseMaps}
        availableOptions={availableBaseMaps}
        tooltip={I18n.t('map.index.base_maps.tooltip')}
        onChange={handleBaseMapsChange}
      />
    </TabPanel>
    <TabPanel>
      <TogglesControl
        className="map-panel__content"
        options={layers}
        availableOptions={availableLayers}
        onChange={handleLayersChange}
      />
    </TabPanel>
  </Tabs>
);

export default CoverageAuxiliarControls;