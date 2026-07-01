// src\theme\styles.ts

import { StyleSheet } from "react-native"
import { colors, spacing, borderRadius } from "./tokens"

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background
  },
  flatList: {
    padding: spacing.md,
    gap: spacing.md
  },
  scrollView: {
    flex: 1,
    padding: spacing.md,
    gap: spacing.md
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
    gap: spacing.md
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: spacing.md,
    gap: spacing.md
  },
  containerDashed: {
    alignItems: "stretch",
    backgroundColor: "#f242",
    borderColor: "#f246",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: borderRadius.md,
    padding: spacing.md,
    gap: spacing.md
  },
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.sm
  },
  button: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.round,
    backgroundColor: colors.primary,
    alignSelf: "center"
  },
  buttonText: {
    color: colors.textLight,
    textAlign: "center",
    fontWeight: "500"
  },
  filter: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.round,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    alignSelf: "center"
  },
  filterFilled: {
    backgroundColor: colors.textPrimary,
  },
  filterOutlined: {
    backgroundColor: colors.background,
  },
  title: {
    marginBottom: 6,
    color: colors.textPrimary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24
  },
  subtitle: {
    marginBottom: 6,
    color: colors.textPrimary,
    fontStyle: "italic",
    fontSize: 18
  },
  strongText: {
    color: colors.textPrimary,
    fontWeight: "600"
  },
  text: {
    color: colors.textPrimary,
    textAlign: "center"
  },
  textLight: {
    color: colors.textLight,
    textAlign: "center"
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: borderRadius.round,
    borderWidth: 1,
    height: 100,
    width: 100
  },
  form: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: spacing.md
  },
  label: {
    color: colors.textSecondary,
    fontWeight: "600",
    fontSize: 16
  },
  input: {
    backgroundColor: "#ccc2",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: borderRadius.md,
    padding: spacing.md
  },
  textArea: {
    minHeight: 100
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: "#f422"
  },
  errorText: {
    color: colors.error,
    fontSize: 14
  },
  statusText: {
    textAlign: "center",
    fontWeight: "bold"
  }
})
