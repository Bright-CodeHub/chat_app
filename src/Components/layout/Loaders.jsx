import { Grid, Skeleton, Stack, } from "@mui/material"


export const LayoutLoader = () => {

    return (
        <Grid container sx={{ height: 'calc(100vh - 4rem)' }} spacing={'1rem'} >

            <Grid size={{ xs: 'grow' }} >
                <Skeleton variant="rectangular" height={'100vh'} />
            </Grid>

            <Grid size={{ sm: 'grow' }} sx={{ display: { xs: 'none', sm: 'block' } }} >
                <Stack spacing={'1rem'} sx={{ py: 1 }} >
                    {
                        Array.from({ length: 10 }).map((_, idx) => {
                            return <Skeleton key={idx} height={'3rem'} />
                        })
                    }
                </Stack>
            </Grid>

            <Grid size={4} sx={{ display: { xs: 'none', md: 'block' } }} >
                <Skeleton variant="rectangular" height={'100vh'} />
            </Grid>

        </Grid >
    )
}