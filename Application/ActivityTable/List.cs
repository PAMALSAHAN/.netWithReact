using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ActivityTable
{
    public class List
    {
        //nested class dekak hadanawa 
        public class Query : IRequest<List<Activity>> { }
        //methana parameter eka widihata deela tinne mokadda use karana list eka kiyala.mokada query eken api hamawelema 
        // karanne list ekak retrive karana eka hinda. 

        public class Handler : IRequestHandler<Query, List<Activity>>
        {

            //ctor eka use karala dataContex eka inject karagannawa mokada eke thami activityTbl eke list eka tinne
            private readonly DataContex _context;
            public Handler(DataContex context)
            {
                _context = context;

            }
            // methana use karana parameter eka thami Query ekai mokadda return karanne kiyana ekai
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                    var activities = await _context.ActivityTbl.ToListAsync();
                    return activities;

            }
        }
    }
}