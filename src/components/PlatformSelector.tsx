import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
//import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { platform } from "../hooks/useGames";

interface Props {
    onSelctPlatform: (platform: platform) =>void;
    selectedPlatform: platform | null;
}

const PlatformSelector = ({ onSelctPlatform, selectedPlatform }: Props) => {
   const { data, error } = usePlatforms();

   if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelctPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;