{/*import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef  } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
     onSearch: (secrchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

      const ref = useRef<HTMLInputElement>(null);
      

    return (
        <form 
        onSubmit={(event) => {
         const ref = useRef <HTMLInputElement>(null);
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}
        >
        <InputGroup>
        <InputLeftElement pointerEvents="none" >
              <BsSearch />
         </InputLeftElement>
         <Input
             ref={ref}
             borderRadius={20}
             placeholder="Search games..."
             variant="filled"
             />
             </InputGroup>
        </form>    
    );
};

export default SearchInput;*/}

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null); // ✅ Declare ref at the top level

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <BsSearch />
                </InputLeftElement>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder="Search games..."
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
