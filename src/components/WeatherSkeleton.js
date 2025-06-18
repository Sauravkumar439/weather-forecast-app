import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Skeleton,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

export default function WeatherSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={11} sm={8} md={6}>
          <Card elevation={6}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box width="70%">
                  <Skeleton variant="text" width="80%" height={40} />
                  <Skeleton variant="text" width="60%" height={30} />
                  <Skeleton variant="text" width="90%" height={20} />
                  <Skeleton variant="text" width="50%" height={20} />
                </Box>
                <Skeleton variant="circular" width={100} height={100} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  );
}
