import { Breadcrumbs, Link, Typography } from '~/app/presentation/components';
import { BreadcrumbsProps } from './breadcrumbs-props.interface';
import makeStyles from './breadcrumbs-styles';

function BreadcrumbsComponent({ currentPage }: BreadcrumbsProps) {
  const classes = makeStyles();
  return (
    <Breadcrumbs
      className={classes.container}
      separator='›'
      aria-label='breadcrumb'
      data-testid='breadcrumb-list'
    >
      <Link className={classes.previousPage} href='#'>
        hubla!
      </Link>
      <Link className={classes.previousPage} href='#'>
        Financeiro
      </Link>
      <Typography className={classes.currentPage} key='3' color='text.primary'>
        {currentPage}
      </Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
