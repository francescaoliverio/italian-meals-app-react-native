// src\components\SearchBar.tsx

import { useRef } from "react"
import { TextInput, View } from "react-native"
import IconButton from "./IconButton"
import { useColors, useStyles } from "../theme/styles"

interface SearchBarProps {
  onSearch: (text: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = "Search..." }: SearchBarProps) {
  const styles = useStyles()
  const colors = useColors()

  const textRef = useRef("")

  return (
    <View style={styles.filtersContainer}>
      <TextInput
        style={[styles.input, { flexGrow: 2 }]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        autoCorrect={false}
        returnKeyType="search"
        onSubmitEditing={() => onSearch(textRef.current)}
        onChangeText={(text) => {
          textRef.current = text
        }}
      />
      <IconButton iconName="search-outline" color={colors.textSecondary} onPress={() => onSearch(textRef.current)} />
    </View>
  )
}
